import moment from 'moment';
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        compress(reader.result,1.5,callback)
    });
    reader.readAsDataURL(img);
}
// base64压缩
function compress(base64, bili,callback){
    var _img = new Image();
	_img.src = base64;
	_img.onload = function() {
		var _canvas = document.createElement("canvas");
		var w = this.width / bili;
		var h = this.height / bili;
		_canvas.setAttribute("width", w);
		_canvas.setAttribute("height", h);
		_canvas.getContext("2d").drawImage(this, 0, 0, w, h);
		var base64 = _canvas.toDataURL("image/jpeg");
		_canvas.toBlob(function(blob) {
			if(blob.size > 1024*1024){
				compress(base64, bili, callback);
			}else{
				callback(base64,blob);
			}
		}, "image/jpeg");
	}
}

// 获取当前时间
function getCurrentDateTime(){
	return moment();
}
module.exports = {
    getBase64,
	getCurrentDateTime
}