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
    $('body').on('click', '#objectList li', function(){
        $('#objectList li .fa-check-circle').removeClass('fa-check-circle').addClass('fa-circle');
        $(this).find('.fa').removeClass('fa-circle').addClass('fa-check-circle');
        S9.selectedObject = S9.utilities.getObjectById($(this).attr('data-objectID'));
        S9.functions.populateProperties();
    });
    
    //When user changes a property value
    $('body').on('blur', '#propertiesTable input[type="text"]', function(){
        var propName = $(this).attr('data-property');
        var newVal = $(this).val();
        
        if (propName === 'x') {
            S9.selectedObject.setX(newVal);
        }
        else if (propName === 'y') {
            S9.selectedObject.setY(newVal);
        }
        else {
            S9.selectedObject[propName] = newVal;
        }
    });
})