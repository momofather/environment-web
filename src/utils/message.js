import { message,Modal } from 'antd';

const Message = {
    success: (msg)=>{
        message.success(msg);
    },
    error: (msg)=>{
        message.error(msg);
    },
    warning: (msg)=>{
        message.warning(msg);
    },
    confirm: (msg,funOk,funCancel)=>{
        Modal.confirm({
            title: msg,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                if (typeof funOk === 'function') {
                    funOk();
                }
            },
            onCancel(){
                if (typeof funCancel === 'function') {
                    funCancel();
                }
            }
        });
    }
}
export default Message;