$(function(){
	
	adjustFrameContainerSizes();
	//resolveBxIncludes(); 

	$(window).resize(adjustFrameContainerSizes);

	//Calculates and applies the panel sizes based on window sizes
	function adjustFrameContainerSizes () {
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var maxSidePanelWidth = 300;
		var maxBottomPanelHeight = 270;

		var sidePanelWidth = (windowWidth * .3);
		sidePanelWidth = (sidePanelWidth > maxSidePanelWidth) ? maxSidePanelWidth : sidePanelWidth;

		var midPanelWidth = windowWidth - sidePanelWidth;

		var bottomPanelHeight = (windowHeight * .25);
		//console.log('bottomPanelHeight='+bottomPanelHeight);
		bottomPanelHeight = (bottomPanelHeight > maxBottomPanelHeight) ? maxBottomPanelHeight : bottomPanelHeight;
		//console.log('bottomPanelHeight='+bottomPanelHeight);
		var midPanelHeight = windowHeight - bottomPanelHeight;

		$('#midPanelContainer').css({
			'height' : midPanelHeight + 'px',
			'width' : midPanelWidth + 'px'
		});

		$('#bottomPanelContainer').css({
			'height' : bottomPanelHeight + 'px',
			'width' : midPanelWidth + 'px'
		});

		$('#rightPanelContainer').css({
			'width' : sidePanelWidth + 'px'
		});
	}

    //include the external files
//	function resolveBxIncludes () {
//		var bxIncludeDivs = $('[bx-include]');
//
//		//while (bxIncludeDivs.length > 0) {
//			bxIncludeDivs.each(function () {
//				var _this = this;
//				var url = $(_this).attr('bx-include');
//                
//				if(url.trim().length <= 0) {return;}
//                
//				$.ajax({
//					"url": url,
//					"success": function (data) { 
//                        $(_this).html(data); 
//                    },
//					"error": function (err) { 
//                        console.log(err);
//                    }
//				})
//			});
//            
//            //bxIncludeDivs.removeAttr('bx-include');
//		//}
//	}
    
    //When user selects an object from Objects
    $('body').on('click', '#objectList li .select-obj', function(){
        if($(this).hasClass('fa-check-circle')) {return;}
        $('#objectList li .fa-check-circle').removeClass('fa-check-circle').addClass('fa-circle');
        $(this).removeClass('fa-circle').addClass('fa-check-circle');
        S9.selectedObject = S9.utilities.getObjectById($(this).closest('li').attr('data-objectID'));
        
        //S9.selectedObjectID = $(this).closest('li').attr('data-objectID');
        
        S9.functions.populateProperties();
    });
    
    //When user changes a property value
    $('body').on('blur', '#propertiesTable input[type="text"]', function(){
        var propName = $(this).attr('data-property');
        var newVal = $(this).val();
        
        S9.selectedObject.updateProperty(propName, newVal);
        //var selectedObject = S9.utilities.getObjectById(S9.selectedObjectID);
        //console.log('will change the property of ID='+S9.selectedObjectID);        
        //selectedObject.updateProperty(propName, newVal);
        //console.log(selectedObject);
        
        if(propName === 'name') {
            S9.functions.populateObjectsList();
        }
    });
    
    
    //User clicks on create game object button
    $('#createNewObject').on('click', function(){
        var objArr = [];
        objArr.push(new GameObject());
        S9.functions.addNewObject(objArr);
    });
    
    
    //User clicks on Clone Object Button
    $('body').on('click', '#objectList li .clone-object', function(){
        var objectID = $(this).closest('li').attr('data-objectid');
        var targetObj = S9.utilities.getObjectById(objectID);
        S9.functions.cloneObject(targetObj);
    });
    
    //User clicks on Delete Object Button
    $('body').on('click', '#objectList li .delete-obj', function(){
        var objectID = $(this).closest('li').attr('data-objectid');
        var targetObj = S9.utilities.getObjectById(objectID);
        S9.functions.deleteObject(targetObj.name);
    });
    
    //User clicks on Share Code in URL Button
    $('#shareCode').on('click', function(){
       S9.utilities.shareCodeInUrl(); 
    });
})