<script>
import { h } from 'vue'
import MyButton from '@/libs/jspp-ui/MyButton/index.vue'

export default {
  name: 'VModel',
  props: {
    username: String,
    password: String,
      test: String
  },
  emits: [
    'update:username',
    'update:password',
    'submit'
  ],
  render () {
    return h('form', null, [
      h('input', {
        type: 'text',
        autocomplete: 'username',
        value: this.username,
        placeholder: 'Username',
        onInput: $event => this.$emit('update:username', $event.target.value)
      }),
      h('input', {
        type: 'password',
        autocomplete: 'current-password',
        value: this.password,
        placeholder: 'Password',
        onInput: $event => this.$emit('update:password', $event.target.value)
      }),
      h(MyButton, {
          type: 'primary',
        onClick: () => this.$emit('submit')
      }, () => 'Submit'),
    ])
  }
}
</script>

<style>

</style>
