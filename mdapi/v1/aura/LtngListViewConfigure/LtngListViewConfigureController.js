({
    doInit: function (component, event, helper) {
        var navEvent = $A.get("e.force:navigateToList");
        let id = component.get('v.recordId');
        let configId = component.get('v.defaultListViewID');
        if (id != configId) {
            setTimeout(function () {
                navEvent.setParams({
                    "listViewId": configId,
                    "listViewName": null,
                    "scope": component.get('v.objectName')
                });

                navEvent.fire();
            }, 500);
        }

    }
})