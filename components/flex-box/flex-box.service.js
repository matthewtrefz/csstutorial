'use strict';

angular
	.module('app')
	.service('FlexBoxService', FlexBoxService);

FlexBoxService.$inject = [];

function FlexBoxService() {
	return {
		createFlexItem: createFlexItem,
		flexPropertyValueList: flexPropertyValueList,
		getFlexItemList: getFlexItemList,
		setFlexParameter: setFlexParameter
	};

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

	function getFlexItemList(requestedCount) {
		var itemList = [];

		for(var c=1; c <= requestedCount; c++){
			itemList.push(createFlexItem());
		}

		return itemList;
	}

	function setFlexParameter(target, parameterName, parameterValue) {
		target[parameterName] = parameterValue;
	}
}