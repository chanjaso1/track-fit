    //	A more usable, dynamic navigate function
	//	Passing in the path and direction
	//	Working out the action based on direction
	export const dynamicNavigate = (path : String, direction : String, router : any) => {
		console.log('forwarding')
		const action = direction === "forward" ? "push" : "pop";
		router.push(path, direction, action);
	}

	//	Checking if we can go back
	//	Before calling the goBack() method
	export const navigateBack = (router : any) => {
		console.log('checking . . .')
		if (router.canGoBack()) {   
			router.goBack();
            console.log("working")
		}
	}
    
    
