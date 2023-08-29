<template>
  <div class="comment-wrap">
    <div class="textarea-wrap">
      <p>
        <textarea
            class="textarea-input"
            rows="4"
            v-model="state.commentText"></textarea>
      </p>
      <p class="btn">
        <my-button type="primary" @click="addComment(store.state.userInfo)">提交评论</my-button>
      </p>
    </div>
    <div>
      <ul class="comment-list">
        <comment-comp :data="state.commentTree" :user-info="store.state.userInfo" @add-reply="addReply"></comment-comp>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
  import {useStore} from 'vuex'
  import CommentComp from './CommentComp.vue';

  import Comment from './Comment.js';

  const store = useStore();

  const {
    state,
    addReply,
    addComment
  } = new Comment('one');

  // const state = reactive({
  //   commentText: '',
  //   commentTree: formatTree(getComment('one'))
  // });

  // const addComment = () => {
  //   const { id, username } = userInfoStore.userInfo;

  //   const commentInfo = {
  //     id: new Date().getTime(),
  //     pid: 0,
  //     uid: id,
  //     username,
  //     comment: state.commentText
  //   }

  //   setComment('one', commentInfo);
  //   state.commentTree.unshift(commentInfo);
  //   state.commentText = '';
  // }

  // const addReply = (item, replyText) => {
  //   const { id, username } = userInfoStore.userInfo;

  //   const replyInfo = {
  //     id: new Date().getTime(),
  //     pid: item.id,
  //     uid: id,
  //     username,
  //     comment: replyText
  //   }
    
  //   ;(item.children || (item.children = [])).unshift(replyInfo);
  //   setComment('one', replyInfo);
  // }

  // function getComment (field) {
  //   return JSON.parse(localStorage.getItem(field) || '[]');
  // }

  // function setComment (field, comment) {
  //   const commentList = JSON.parse(localStorage.getItem(field) || '[]');
  //   commentList.unshift(comment);
  //   localStorage.setItem(field, JSON.stringify(commentList));
  // }

  // function formatTree (data) {
  //   const result = [];
  //   const map = {
  //     /**
  //      * 1: item,
  //      * 2: item
  //      * 
  //      */
  //   };

  //   data.forEach(item => {
  //     map[item.id] = item;
  //   });

  //   data.forEach(item => {
  //     const parent = map[item.pid];

  //     if (parent) {
  //       ;(parent.children || (parent.children = [])).unshift(item);
  //     } else {
  //       result.unshift(item);
  //     }
  //   });

  //   return result;
  // }
</script>

<style lang="scss" scoped>
.comment-wrap{
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

    .comment-list{
        margin-left: 20px;
    }
}
</style>