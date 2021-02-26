@nohook
Feature: This is to verify the promo switching by clicking next button 

Background: Pre-requsit for promo switching
Given Launch the browser and naviagate to home page


Scenario Outline: Play promo and verify the auto switching from the left panel 
	When search sho name <shoName> for promo switching 
	And Play the first promo 
	And Drag to the end 
	And click on the next expisode button 
	Then verify the promo is play the next 
	Examples: 
		|shoName|
		|kaththi|
		
Scenario Outline: Play promo and verify the auto switching without click on cancell button.  
	When search sho name <shoName> for promo switching 
	And Play the first promo 
	And Drag to the end 
	And wait for ten seconds 
	Then verify the promo is play the next 
	Examples: 
		|shoName|
		|kaththi|
		
		
Scenario Outline: Play promo and verify the auto switching without click button - fullscreen  
	When search sho name <shoName> for promo switching 
	And Play the first promo 
	And click on fullscreen button
	And Drag to the end 
	And wait for ten seconds 
	Then verify the promo is play the next 
	Examples: 
		|shoName|
		|kaththi|

Scenario Outline: This is to verify the promo switching by clicking next button - fullscreen
	When search sho name <shoName> for promo switching 
	And Play the first promo
	And click on fullscreen button 
	And Drag to the end 
	And click on the next expisode button 
	Then verify the promo is play the next 
	Examples: 
		|shoName|
		|kaththi|
	
Scenario Outline: Play promo and verify the auto switching without clicking next button - fullscreen 
	When search sho name <shoName> for promo switching 
	And Play the first promo 
	And click on fullscreen button 
	And Drag to the end 
	And wait for ten seconds 
	Then verify the promo is play the next 
	Examples: 
		|shoName|
		|kaththi|