<template>
  <li
    v-for="item of props.data"
    :key="item.id"
    class="comment-item"
  >
    <p class="username">userName: {{ item.username }}</p>
    <p class="text">{{ item.comment }}</p>
      <my-button class="btn" type="primary" @click="setReplyFlag(item)">回复</my-button>
<!--    <a href="javascript:;" @click="setReplyFlag(item)">回复</a>-->
    <div class="textarea-wrap" v-if="item.isReply">
      <p>
        <textarea  class="textarea-input" v-model="item.replyText"></textarea>
      </p>
      <p>
        <my-button class="btn" type="primary" @click="addReply(item)">提交回复</my-button>
      </p>
    </div>
    <div v-if="item.children">
      <ul class="comment-list">
        <comment-comp :data="item.children" :user-info="userInfo" @add-reply="addReply"></comment-comp>
      </ul>
    </div>
  </li>
</template>

<script setup>
   const props = defineProps({
    data: Array,
    userInfo: Object
   });

   const emit = defineEmits(['addReply'])
   const setReplyFlag = (item) => {
    item.isReply = !item.isReply;
   }

   const addReply = (item) => {
     const replyText = item.replyText;

     emit('addReply', item, replyText, props.userInfo);
     item.isReply = false;
     item.replyText = '';
   }
</script>

<style lang="scss" scoped>
.comment-item{
    .text{
        margin: 10px;
        font-size: 18px;
    }
    .textarea-wrap{
        width: 60%;
        .textarea-input {
            width: 100%;
            height: 100%;
            padding: 0 15px;
            box-sizing: border-box;
            background-color: #fff;
            border: 1px solid #999;
            border-radius: 5px;
            outline: none;
            transition: all .2s linear;

            &:focus {
                border-color: #1890ff;
                box-shadow: 0 0 3px #1890ff;
            }
        }

        .btn{
            margin: 10px 0;
        }
    }

    .btn{
        margin: 10px 0;
    }

    .comment-list{
        margin-left: 20px;
    }
}
</style>