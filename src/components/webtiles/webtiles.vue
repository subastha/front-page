<template>
<div class="webtile-wrapper">
  <div id="grid-web-tile" class="grid grid-web-tile">
    <div v-for="tile in webtiles" @click="editMode ? function(){} : navigate(tile.url)"
      class="item-webtile"
      :class="{'move-pointer':editMode, 'link-pointer':!editMode}"
      :data-order="tile.order"
      :data-id="tile.id">
      <div class="item-content">
        <!-- Safe zone, enter your custom markup -->
  
       <img v-if="tile.imageUrl"  :src="tile.imageUrl" class="absolute-center logo" :alt="tile.name"/>
        {{tile.imageUrl ? "" : tile.name}}
        <div v-if="editMode" class="webtile-button-wrapper">
          <a href="#" @click.stop="editWebtile(tile)">
            <icon name="cog" scale="1.25"></icon>
            </a>
        
          <a href="#" @click.stop="deleteTile($event, tile)">
              <icon name="trash" scale="1.25"></icon>
          </a>
        </div>
        <md-tooltip v-if="tile.imageUrl" 
          md-direction="top" md-delay="400">
          {{tile.name}}
        </md-tooltip>
        <!-- Safe zone ends -->
      </div>
    </div>
  </div>

  <md-button v-if="editMode" @click="openAddModal" class="md-icon-button md-raised md-primary btn-add-webtile">
    <md-icon>add</md-icon>
  </md-button>

  <div  class="webtile-edit-wrapper">
    <a v-if="!editMode" href="#" @click="toggleEditMode"><icon name="cog" scale="1.5"></icon></a>
    <a v-if="editMode" href="#" @click="toggleEditMode"><icon name="window-close" scale="1.5"></icon></a>
  </div>

  <!-- Add Modal -->
  <material-modal v-bind:show-modal="displayAddModal" 
    @closemodal="displayAddModal = false"
    @savemodal="modalSaveHandler"
    @md-closed="displayAddModal = false">
    <template slot="header">{{modalHeader}}</template>
    <template slot="content">

      <form novalidate class='add-webtile-form-container' @submit.prevent>
        <md-field class='custom-md-field'>
          <label> name</label>
          <md-input v-model='form.name' name="name" type="text"></md-input>
          <span class="md-error custom-md-error" v-if="showErrors && !$v.form.name.required">Name is required.</span>
        </md-field>
        <md-field class='custom-md-field '>
          <label>url</label>
          <md-input v-model='form.url' name="url" type="text"></md-input>
          <span class="md-error custom-md-error" v-if="showErrors && !$v.form.url.required">Url is required.</span>
        </md-field>
        <md-field class='custom-md-field '>
          <label> image url</label>
          <md-input v-model='form.imageUrl' name="imageUrl" type="text"></md-input>
        </md-field>
      </form>
    </template>
  </material-modal>

  <!-- Edit Modal -->
  <material-modal v-bind:show-modal="displayEditModal" 
    @closemodal="modalEditCloseHandler"
    @savemodal="modalEditSaveHandler">
    <template slot="header">{{modalHeader}}</template>
    <template slot="content">

      <form novalidate class='add-webtile-form-container' @submit.prevent>
        <md-field class='custom-md-field'>
          <label> name</label>
          <md-input v-model='currentWebtile.name' name="name" type="text"></md-input>
          <span class="md-error custom-md-error" v-if="showErrors && !$v.form.name.required">Name is required.</span>
        </md-field>
        <md-field class='custom-md-field '>
          <label>url</label>
          <md-input v-model='currentWebtile.url' name="url" type="text"></md-input>
          <span class="md-error custom-md-error" v-if="showErrors && !$v.form.url.required">Url is required.</span>
        </md-field>
        <md-field class='custom-md-field '>
          <label> image url</label>
          <md-input v-model='currentWebtile.imageUrl' name="imageUrl" type="text"></md-input>
        </md-field>
      </form>
    </template>
  </material-modal>
  <md-dialog-confirm
      :md-active.sync="confirmModal.active"
      :md-title="confirmModal.title"
      :md-content="confirmModal.content"
      :md-confirm-text="confirmModal.confirmText"
      :md-cancel-text="confirmModal.cancelText"
      @md-cancel="onConfirmModalCancel"
      @md-confirm="onConfirmModalConfirm" />
</div>
</template>

<script>
/* eslint-disable */
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import Muuri from 'muuri';
import MaterialModal from '@/core/components/MaterialModal/MaterialModal';
import { validateLink } from '@/core/services/common/Utility';
import WebtilesHttpService from './WebtilesHttpService';
import { webtileFactory } from './webtileFactory';
import { commonErrorHandler } from '../../core/services/common/handlers';


export default {
  mixins: [validationMixin],
  components: {
    MaterialModal,
  },
  computed: {
  },
  data() {
    return {
      grid: null,
      editMode: false,
      currentWebtile: {},
      showErrors: false,
      webtiles: [],
      displayAddModal: false,
      displayEditModal: false,
      isOrderDirty: false,
      modalHeader: '',
      form: {
        name: '',
        url: '',
        imageUrl: '',
      },
      confirmModal: {
        active: false,
        title: '',
        content: '',
        confirmText: 'OK',
        cancelText: 'Cancel',
      },
    };
  },
  validation: {
    form: {
      name: {
        required,
      },
      url: {
        required,
      },
      imageUrl: {},
    },
  },
  methods: {
    renderWebtiles(gridOptions) {
      const webtileElement = document.getElementById('grid-web-tile');
      const defaultOptions = {
        sortData: {
            // order: item => parseInt(element.getAttribute('data-order'), 10),
            order: function (item, element) {
              return parseInt(element.getAttribute('data-order'), 10);
            },
          },
      };

      if(window.grid) {
        window.grid.destroy();
        window.grid = null;
      }
      // const grid = new Muuri('#grid-web-tile', options);
      window.grid = new Muuri(webtileElement, Object.assign({}, defaultOptions, gridOptions));
      // const webtiles = this.webtiles;
      window.grid.on('dragReleaseEnd', function(gridItem) {
        this.isOrderDirty = true;
        console.log('dragReleaseEnd', window.grid.getItems());
        window.grid.getItems().forEach(function(item, index) {
          const webtile = this.webtiles.find(
            tile => tile.id == parseInt(item.getElement().getAttribute('data-id'), 10)
          );

          webtile.order = index + 1;
        }, this);
        console.log('after drag release', this.webtiles);
      }.bind(this));
      // this.$nextTick(() => {
      //   window.grid.refreshSortData();
      //   window.grid.sort('order');
      // });
      
      // console.log('this.webtiles', this.webtiles);
    },
    toggleEditMode() {
      console.log(this.editMode);
      this.editMode = !this.editMode;

      let options = {};
      if (this.editMode) {
        options = {
          dragEnabled: true,
        };
        this.renderWebtiles(options);
      } else {
        this.saveWebtileOrder();
      }
      // if(!this.editMode){
      //   window.grid.refreshSortData();
      //   window.grid.sort('order');
      // }
    },
    saveWebtileOrder() {
      WebtilesHttpService.saveWebtileOrder(
        this.webtiles.map(
          (webtile) => {
            const obj = {
              id: webtile.id,
              order: webtile.order,
            };
            return obj;
          }
        )
      ).then((response) => {
        this.setupWebtiles(response.data.webtiles);
      });
    },
    navigate(url) {
      console.log(url);
      window.open(validateLink(url), '_blank');
    },
    validateForm() {
      this.showErrors = true;
      this.$v.$touch();

      if (!this.$v.$invalid) {
        return true;
      }

      return false;
    },
    openAddModal() {
      console.log('displayAddModal', this.displayAddModal);
      this.modalHeader = 'Add Webtile';
      this.displayAddModal = true;
    },
    closeAddModal() {
      this.displayAddModal = false;
      this.clearWebtileForm();
    },
    modalSaveHandler(data) {
      // if (this.validateForm()) {
      console.log(this.form);
      console.log(data);
      webtileFactory.generate(this.form)
        .then((webtile) => {
          this.webtiles.push(webtile);
          this.$nextTick(() => {
            this.renderWebtiles();
          });
          this.closeAddModal();
        });
      // }
    },
    onConfirmModalCancel() {
      this.confirmModal.active = false;
    },
    onConfirmModalConfirm() {
      this.currentWebtile.delete()
        .then(() => {
          this.webtiles.splice(
            this.webtiles.findIndex(
              webtile => webtile.id === this.currentWebtile.id,
            ),
            1,
          );
          this.currentWebtile = {};
          this.$nextTick(() => {
            this.renderWebtiles();
          });
        });
    },
    activateDeleteConfirmModal(webtile) {
      console.log('current webtile: ', this.currentWebtile);
      this.confirmModal.active = true;
      this.confirmModal.content = `Delete webtile ${webtile.name}?`;
    },
    deleteTile(event, webtile) {
      event.stopPropagation();
      console.log(webtile);
      this.currentWebtile = webtile;
      this.activateDeleteConfirmModal(webtile);
    },
    editWebtile(webtile) {
      event.stopPropagation();      
      this.modalHeader = 'Edit Webtile';
      this.currentWebtile = webtileFactory.create(webtile);
      this.displayEditModal = true;
      console.log(webtile);
    },
    modalEditSaveHandler() {
      // update
      this.currentWebtile.update()
        .then((response) => {
          // swap out
          const index = this.webtiles.findIndex(
            webtile => webtile.id === this.currentWebtile.id,
          );
          if (index !== -1) {
            this.webtiles[index] = webtileFactory.create(response.data.webtile);
          }

          this.displayEditModal = false;
          this.currentWebtile = {};
          this.$nextTick(() => {
            this.renderWebtiles();
          });
        });
      console.log(this.currentWebtile);
    },
    modalEditCloseHandler() {
      if(this.displayEditModal) {
        console.log('edit modal closing');
        this.displayEditModal = false;
        this.currentWebtile = {};
        this.clearWebtileForm();
      }
    },
    clearWebtileForm() {
      this.form = {
        name: '',
        url: '',
        imageUrl: '',
      };
    },
    setupWebtiles(webtiles) {
      this.webtiles = webtiles
                        .sort((a,b) => (a.order - b.order))
                        .map(webtileFactory.create);
        // wait until all UI elements are created before creating grid
        this.$nextTick(() => {
          this.renderWebtiles();
        });
    },
  },
  created() {

  },
  mounted() {
    WebtilesHttpService.getWebtiles()
      .then((response) => {
        this.setupWebtiles(response.data.webtiles);
      }, commonErrorHandler);
  },
};
</script>

<style lang="scss">
@import 'Webtiles.scss';
</style>