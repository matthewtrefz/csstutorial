'use strict';

angular
	.module('app')
	.service('FlexBoxService', FlexBoxService);

FlexBoxService.$inject = [];

function FlexBoxService() {
	var labelList = createLabelList();

	return {
		createFlexItem: createFlexItem,
		flexPropertyValueList: flexPropertyValueList,
		getFlexItemList: getFlexItemList,
		setFlexParameter: setFlexParameter
	};

	function createLabelList(){
		var list = [];
		for (var i=65;i<=90;i++){
			list.push(String.fromCharCode(i));
		}

		for (var i=97;i<=122;i++){
			list.push(String.fromCharCode(i));
		}
		return list;
	}

	function createFlexItem() {
		var item = {
			color: null,
			height: null,
			width: null
		};
		return item;
	}

	function flexPropertyValueList() {
		var list = {
			alignItems: [
				'flex-start',
				'flex-end',
				'center',
				'baseline',
				'stretch'
			],
			alignContent: [
				'flex-start',
				'flex-end',
				'center',
				'baseline',
				'stretch'
			],
			direction: ['column', 'row'],
			justifyContent: [
				'flex-start',
				'flex-end',
				'center',
				'space-between',
				'space-around',
				'space-evenly'
			],
			wrap: ['wrap', 'nowrap']
		};

		return list;
	}

	function getFlexItemLabel(item, index) {
		var label = index < 53 ? labelList[index] : index.toString();
		return label;
	}

	function getFlexItemList(requestedCount) {
		var itemList = [];

		for( var c=1; c <= requestedCount; c++){
			var item = createFlexItem();
				item.label = getFlexItemLabel(item, c-1);
			itemList.push(item);
		}

		return itemList;
	}

	function setFlexParameter(target, parameterName, parameterValue) {
		target[parameterName] = parameterValue;
	}

}