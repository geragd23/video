var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
  
	document.querySelector("#play").addEventListener("click", function() {
		const video = document.getElementById("player1"); 
		video.play()
		console.log("Play Video");
	  });
	  
	  document.querySelector("#pause").addEventListener("click", function() {
		const video = document.getElementById("player1"); 
		video.pause()
		console.log("Pause Video");
	  });

	  document.querySelector("#slower").addEventListener("click", function() {
		const video = document.getElementById("player1"); 
		video.playbackRate -= 0.1
		console.log("Slowed Down");
	  });

	  document.querySelector("#faster").addEventListener("click", function() {
		const video = document.getElementById("player1"); 
		video.playbackRate += 0.1
		console.log("Sped Up")
	  });

	  document.querySelector("#mute").addEventListener("click", function() {
		const video = document.getElementById("player1"); 
		video.muted();
		console.log("Muted");
		});
		document.querySelector("#skip").addEventListener("click", function() {
			const video = document.getElementById("player1"); 
			video.currentTime += 10; 
    		console.log("Skip Ahead");
			});
	  });
	  
	  

  
