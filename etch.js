for(let j=0;j<25;j++) {
            for(let i=0;i<25;i++) {
    
                const canvas=document.getElementById("canvas");
                const div=document.createElement("div");
                div.classList.add("blocks");
                div.onmouseover = function() {
    		      if (div.classList) {
    			     div.classList.add("blocks1");
    		      }
    		
     	        }
                canvas.appendChild(div);
            }

        const breaks=document.createElement("br");
        canvas.appendChild(breaks);



        }
        
        
        

        function changeDimensions() {

            Array.from(document.querySelectorAll('.blocks')).forEach(gridItem => {
                gridItem.remove();
            });

            var input = prompt('Input the dimension between 2-29(e.g., input 16 for a 16x16 grid).');
            for(let j=0;j<input;j++) {
            for(let i=0;i<input;i++) {
    
                const canvas=document.getElementById("canvas");
                const div=document.createElement("div");
                div.classList.add("blocks");
                div.onmouseover = function() {
    		      if (div.classList) {
    			     div.classList.add("blocks1");
    		      }
    		
     	        }
                canvas.appendChild(div);
            }

            const breaks=document.createElement("br");
            canvas.appendChild(breaks);
            
            }
        }
        
        
            function rainbowMode() {
                let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		          '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		          '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
		          '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		          '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
		          '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		          '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
		          '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		          '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
		          '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
                let random = colorArray[Math.floor(Math.random()*colorArray.length)];
                return random;
            };
        
        function rainDraw() {
        Array.from(document.querySelectorAll('.blocks')).forEach(gridItem => {
    gridItem.addEventListener('mouseenter', () => {
      gridItem.style.backgroundColor = rainbowMode();
    });
  });
}
    const rainBow = document.getElementById('rainbow');
rainBow.addEventListener('click', () => {
  rainDraw();
});    
       