sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tanabe/cashmanagement/filecontentreport/test/integration/FirstJourney',
		'tanabe/cashmanagement/filecontentreport/test/integration/pages/FileHeaderList',
		'tanabe/cashmanagement/filecontentreport/test/integration/pages/FileHeaderObjectPage',
		'tanabe/cashmanagement/filecontentreport/test/integration/pages/FileContentObjectPage'
    ],
    function(JourneyRunner, opaJourney, FileHeaderList, FileHeaderObjectPage, FileContentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tanabe/cashmanagement/filecontentreport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFileHeaderList: FileHeaderList,
					onTheFileHeaderObjectPage: FileHeaderObjectPage,
					onTheFileContentObjectPage: FileContentObjectPage
                }
            },
            opaJourney.run
        );
    }
);