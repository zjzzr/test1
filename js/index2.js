var aMusic = document.getElementsByClassName('musics')[0];
var boo = true;
window.onload = function(){
	console.log(1);
	aMusic.play();
	toggle()
};
//函数的关键字    函数的名字
function toggle(){
	console.log(1)
	var music = document.getElementsByClassName('music-img')[0];
	if(boo){
		music.classList.add('run');
		aMusic.play();
		boo = false
	}else{
		music.classList.remove('run');
		music.classList.add('pause');
		aMusic.pause();
		boo = true
	}
}


 