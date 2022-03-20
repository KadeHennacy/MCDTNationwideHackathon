<template>
  <div>
    <h3 class="text-4xl font-semibold">{{ itemName }}</h3>
    <!-- Im adding this section. When complete, it will use a v-if to see if user has already submitted the claim info. If they haven't submitted anything, it displays a conventional form. If they have sumbitted some info, it will display the existing info, with buttons that allow them to update the info. For now ill mimic the structure of the photo list-->
    <div class="text-2xl mt-4">Update Information</div>
    <div class="flex flex-wrap p-10 justify-center m-auto w-full" v-if="photos">
      <!-- im going to copy the form tag from the select a file form. Hopefully it works the same way for text. down the road im going to have to get into the weeds to figure out how to handle the data upon submission -->
      <form enctype="multipart/form-data" @submit.prevent="updateInfo()">
      <!-- this copies the styles of the "claim name" field from the albums page create claim -->
      <!-- the last attribute of this input is v-model="albumName". When this attribute This modifies the value of albumName as seen above. Maybe I can find where albumName is stored, make the same kind of var called description or something, and store the inputs in the same way -->
      <!-- I refactored albumName to itemName -->
      <input
        class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Item description"
        type="text"
        v-model="itemDescription"
        required
      />
      <input
        class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Brand"
        type="text"
        v-model="itemBrand"
        required
      />
      <input
        class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Age (years)"
        @keypress="isNumber($event)"
        type="text"
        v-model="itemAge"
        required
      />
      <input
        class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Condition"
        type="text"
        v-model="itemCondition"
        required
      />
      <input
        class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Price of original purchase"
        type="text"
        @input="addCurrency1()"
        v-model="itemPrice"
        @keypress="isNumber($event)"
        required
      />
      <input
        class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Estimated replacement cost"
        type="text"
        @input="addCurrency2()"
        @keypress="isNumber($event)"
        v-model="itemReplace"
        required
      />
      <div class="submit">
      <button class="btn-blue mb-4">Update Info</button>
      </div>
      </form>
    </div>
    <div class="text-2xl">Claim Information</div>
    <div class="flex w-full mt-10 items-center justify-center bg-grey-lighter break-normal">
      <div class="w-3/4 flex flex-col justify-left items-left px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-green-600">
        <h5 class="text-left break-words"><div class="font-bold">Description:</div> {{dDescription}}</h5>
        <h5 class="text-left"><div class="font-bold">Brand:</div> {{dBrand}}</h5>
        <h5 class="text-left"><div class="font-bold">Age (years):</div> {{dAge}}</h5>
        <h5 class="text-left"><div class="font-bold">Condition:</div> {{dCondition}}</h5>
        <h5 class="text-left"><div class="font-bold">Price of original purchase:</div> {{dPrice}}</h5>
        <h5 class="text-left"><div class="font-bold">Estimate replacement cost:</div> {{dReplace}}</h5>
      </div>
    </div>
    <div class="text-2xl mt-4">Upload Photos</div>
    <div class="flex w-full mt-10 items-center justify-center bg-grey-lighter">
      <form enctype="multipart/form-data" novalidate>
        <label
          class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-green-600"
        >
          <svg
            class="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
            />
          </svg>
          <span class="mt-2 text-base leading-normal">Select a file</span>
          <input @change="onFileChange" accept="image/*" type="file" class="hidden" />
        </label>
      </form>
    </div>
    <div class="text-2xl mt-10">List Of Photos</div>
    <div class="flex flex-wrap p-10 justify-center m-auto w-full" v-if="photos">
      <div class="shadow-xl ml-4 mt-4 w-4/12" v-for="(photo, idx) in photos" :key="idx">
        <amplify-s3-image
          level="protected"
          :img-key="photo.thumbnail ? photo.thumbnail.key : photo.fullsize.key"
          class="w-4/12"
        ></amplify-s3-image>
        <div v-if="photo.createdAt && photo.gps">
          <ul>
            <li>Created At {{ photo.createdAt }}</li>
            <li>
              latitude
              {{ photo.gps.latitude }}
            </li>
            <li>longitude At {{ photo.gps.longitude }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-2xl mt-10">Suggested replacements</div>
    <!-- For now this is just a copy of the photolist section. Should have similar tiles -->
    <div class="flex flex-wrap p-10 justify-center m-auto w-full" v-if="photos">
      <div class="shadow-xl ml-4 mt-4 w-4/12" v-for="(photo, idx) in photos" :key="idx">
        <amplify-s3-image
          level="protected"
          :img-key="photo.thumbnail ? photo.thumbnail.key : photo.fullsize.key"
          class="w-4/12"
        ></amplify-s3-image>
        <div v-if="photo.createdAt && photo.gps">
          <ul>
            <li>Created At {{ photo.createdAt }}</li>
            <li>
              latitude
              {{ photo.gps.latitude }}
            </li>
            <li>longitude At {{ photo.gps.longitude }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getPhotos();
  },
  data: () => ({
    photos: [],
    itemName: "",
    itemDescription: "",
    itemBrand: "",
    itemAge: "",
    itemCondition: "",
    itemPrice: "",
    itemReplace: "",
    dName: "",
    dDescription: "",
    dBrand: "",
    dAge: "",
    dCondition: "",
    dPrice: "",
    dReplace: ""
  }),
  methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    async addCurrency1(){
      if (!this.itemPrice.includes("$")){
        this.itemPrice = "$" + this.itemPrice
      }
      if (this.itemPrice.length == 1){
        this.itemPrice = ""
      }
    },
    async addCurrency2(){
      if (!this.itemReplace.includes("$")){
        this.itemReplace = "$" + this.itemReplace
      }
      if (this.itemReplace.length == 1){
        this.itemReplace = ""
      }
    },
    async updateInfo(){
      let price = parseInt(this.itemPrice.substring(1))
      let replace = parseInt(this.itemReplace.substring(1))
      let age = parseInt(this.itemAge)
      console.log(this.itemDescription)
      console.log(this.itemBrand)
      console.log(age)
      console.log(this.itemCondition)
      console.log(price)
      console.log(replace)
      console.log(this.id)
      this.dName = this.itemName
      this.dDescription = this.itemDescription
      this.dBrand = this.itemBrand
      this.dAge = this.itemAge
      this.dCondition = this.itemCondition
      this.dPrice = this.itemPrice
      this.dReplace = this.itemReplace
      try{
        await this.$store.dispatch("albumInfo/updateAlbum", {
          id: this.id,
          description: this.itemDescription ,
          brand: this.itemBrand,
          age: age,
          condition: this.itemCondition,
          price: price,
          replacement: replace
        });
      } catch(error){
        console.log("error updating info");
      }
    },
    async onFileChange(file) {
      if (!file.target || !file.target.files[0]) {
        return;
      }
      try {
        await this.$store.dispatch("albumInfo/createPhoto", {
          file: file.target.files[0],
          id: this.id,
        });
        this.getPhotos();
      } catch (error) {
        console.log("error create photo", error);
      }
    },
    async getPhotos() {
      const album = await this.$store.dispatch("albumInfo/getAlbum", this.id);
      this.photos = album.data.getAlbum.photos.items;
      this.dName = album.data.getAlbum.name;
      this.dDescription = album.data.getAlbum.description;
      this.dBrand = album.data.getAlbum.brand;
      this.dAge = album.data.getAlbum.age;
      this.dCondition = album.data.getAlbum.condition;
      this.dPrice = album.data.getAlbum.price;
      this.dReplace = album.data.getAlbum.replacement;
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style  scoped>
amplify-s3-image {
  --width: 75%;
}
</style>