import { reactive } from "vue";

export default class Comment {
  constructor (field) {
    this.field = field;

    this.state = reactive({
      commentText: '',
      commentTree: this.commentTree
    });
  }

  get commentTree () {
    console.log(JSON.parse(localStorage.getItem(this.field) || '[]'));
    return Comment.formatTree(JSON.parse(localStorage.getItem(this.field) || '[]'));
  }

  addComment = ({ id, username }) => {
    const commentInfo = {
      id: new Date().getTime(),
      pid: 0,
      uid: id,
      username,
      comment: this.state.commentText
    }

    this.setCommentList(commentInfo);
    this.setComment(commentInfo);
  }

  addReply = (item, replyText, { id, username }) => {
    const replyInfo = {
      id: new Date().getTime(),
      pid: item.id,
      uid: id,
      username,
      comment: replyText
    }

    this.setCommentList(replyInfo);
    this.setReply(item, replyInfo);
  }

  setComment (comment) {
    this.state.commentTree.unshift(comment);
    this.state.commentText = '';
  }

  setReply (item, reply) {
    ;(item.children || (item.children = [])).unshift(reply);
  }

  setCommentList (comment) {
    const commentList = JSON.parse(localStorage.getItem(this.field) || '[]');
    commentList.unshift(comment);
    localStorage.setItem(this.field, JSON.stringify(commentList));
  }



  static formatTree (data) {
    const result = [];
    const map = {};

    data.forEach(item => {
      map[item.id] = item;
    });

    data.forEach((item, index) => {
      const parent = map[item.pid];

      if (parent) {
        ;(parent.children || (parent.children = [])).unshift(item);
      } else {
        result.unshift(item);
      }
    });

    return result;
  }
}