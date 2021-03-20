import Modal from './index.vue'
import Button from '../Button'

export default {
  title: 'atoms/Modal',
  component: Modal,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal, Button },
  template: `<Modal v-bind="$props">
                <template v-slot:header>Title</template>
                <div style="padding:20px 0;display:flex;align-items:center;justify-content:space-between;">
                    Modal Contents <Button size="small">Q</Button>
                </div>
                <template v-slot:footer>
                    <Button>NOTHING</Button>
                </template>
            </Modal>`,
})

export const Modal_A = Template.bind({})
Modal_A.args = {}
