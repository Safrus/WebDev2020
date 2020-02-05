var list = document.getElementsByTagName("LI");

		var i;
		for(i=0; i<list.length; i++){
			var span = document.createElement("span");
			var txt = document.createTextNode("\u00D7");
			span.className = "close";
			span.appendChild(txt);
			list[i].appendChild(span);
		}

		var close = document.getElementsByClassName("close");

		var i;

		for(i = 0; i <close.length; i++){
			close[i].onclick = function(){
				var div = this.parentElement;
    			div.style.display = "none";
			}
		}


		var list = document.getElementById('UL');

		list.addEventListener('click', function(ev) {
  				if (ev.target.tagName === 'LI') {
    				ev.target.className = "done";
    				
    				document.getElementById("done-UL").appendChild(ev.target);
    			
  				}
  				document.getElementById("input").value = "";
			},false);


		var doneList = document.getElementById('done-UL');
		doneList.addEventListener('click', function(ev){
			if(ev.target.tagName === 'LI'){
				ev.target.classList.remove('done');
				document.getElementById("UL").appendChild(ev.target);
			}
			document.getElementById("input").value = "";
		}, false);


		function addElement(){
			var li = document.createElement("li");
			li.classList.toggle('notdone');
			var input = document.getElementById("input").value;
			var content = document.createTextNode(input);
			li.appendChild(content);
			if(input === ''){
				alert("Write something!");
			}else{
				document.getElementById("UL").appendChild(li);
			}
			document.getElementById("input").value = "";
			var span = document.createElement("SPAN");
  			var txt = document.createTextNode("\u00D7");
  			span.className = "close";
  			span.appendChild(txt);
  			li.appendChild(span);

  			for (i = 0; i < close.length; i++) {
   				 	close[i].onclick = function() {
     			 	var div = this.parentElement;
      				div.style.display = "none";
    			}
			}
		}

		function showHidden(){
			var div = document.getElementById("done-UL");
			div.style.display = "";
		}

		function hideHidden(){
			var div = document.getElementById("done-UL");
			div.style.display = "none";
		}