<template>
	<div>
	  <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
	    <i class="el-icon-plus"></i>
	  </el-upload>
	  <el-dialog :visible.sync="dialogVisible">
	    <img width="100%" :src="dialogImageUrl" alt="">
	  </el-dialog>

		<div style="margin-top: 20px;"></div>
	  <el-upload
		  class="upload-demo"
		  drag
		  action="https://jsonplaceholder.typicode.com/posts/"
		  multiple>
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
	</div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}

</script>
