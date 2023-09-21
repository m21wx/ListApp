
 // Setting Up Variables
	
	let theInput = document.querySelector('.add-task input');
	let theAddButton = document.querySelector('.add-task .plus');
	let tasksContent = document.querySelector('.tasks-content');
	let noTasksMsg = document.querySelector('.no-tasks-message');
	let tasksCount = document.querySelector('.tasks-count span');		
	let tasksCompleted = document.querySelector('.tasks-completed span');		
			
			
	// Focus On Input Field	
	window.onload =function(){
		theInput.focus()
	};
	
	// Adding The Task
	theAddButton.onclick = function(){
		
		// If Input is Empty
		if(theInput.value === ''){
			let conInput = confirm('لا يمكن ترك الخانه فاضيه ');
			 if(conInput === true){theInput.focus()}
		}else{
			
		// Remove No Tasks Message
		noTasksMsg.remove()

		// Create Span Element
		tasksContent.innerHTML +=`
						 <span class='task-box'>  ${theInput.value} 
					       <span class='delete'> Delete </span>
					    </span> 
					 `;
		theInput.value ='';
		theInput.focus()
	
		// Calculate Tasks
		calculateTasks()
		
		}	

	};
	
	// Delete Task 
	document.addEventListener('click',function(e){
		
		if(e.target.className === 'delete'){
			e.target.parentElement.remove();
			//Check Number of  Tasks In contener
			if(tasksContent.childElementCount == 0){
				createNoTasks()
				
			}

		};
		if(e.target.classList.contains('task-box')){
			e.target.classList.toggle("finished")

		};
			// Calculate Tasks
			calculateTasks()
	});
	
	
	// function To  Create No Tasks Message
	function createNoTasks(){
		let msgSpan = document.createElement('span');
		let msgText = document.createTextNode('No Tasks To Show');
		msgSpan.appendChild(msgText);
		msgSpan.className = 'no-tasks-message';
		tasksContent.append(msgSpan)
		
	};
	
	
	// function To Calculate Tasks
	function calculateTasks(){
		// Calculate All Tasks
		tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
		// Calculate All Completed
		tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	