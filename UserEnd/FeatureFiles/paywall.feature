@nohook
Feature: This is to test the paywall feature 

Background: Pre-requsit for paywall
Given Launch the browser and naviagate to home page


Scenario: Verify add to watchlist feature on home page 
	When click on add to watchlist from flick page 
	Then Verify the add to watchlist mini pop elements 
	And click on later button 
	And click on add to watchlist from flick page 
	And click on signin button 
	And verify that system is redirecting login page 
	
	
@paywall
Scenario Outline: This test is to verify add to watchlist feature on sho detail page 
	When search <searchName> sho or series or studio 
	Then click on add to watchlist button from sho detail page 
	And Verify the add to watchlist mini pop elements 
	And click on later button 
	Then click on add to watchlist button from sho detail page 
	And click on signin button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	And scroll and click on the add to watchlist button 
	And Verify the add to watchlist mini pop elements 
	And click on later button 
	And scroll and click on the add to watchlist button 
	And click on signin button 
	And verify that system is redirecting login page 

	Examples: 
		| searchName |
		| Interstellar - English |
		
		
@paywall		
Scenario Outline: This test is to verify add to watchlist feature on studio detail page 
	When search <searchName> sho or series or studio 
	Then click on add to watchlist from flick page 
	And Verify the add to watchlist mini pop elements 
	And click on later button 
	Then click on add to watchlist from flick page 
	And click on signin button 
	And verify that system is redirecting login page 
	
	Examples: 
		| searchName |
		| santii |
		

@paywall
Scenario Outline: This test is to verify buy button feature on sho detail page  
	When search <searchName> sho or series or studio 
	Then click on buy button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	And Scroll and click on the buy button 
	And verify that system is redirecting login page 
	Examples: 
		| searchName |
		| Interstellar - English |
		
@paywall		
Scenario Outline: This test is to Verify buy button feature on series detail page 
	
	When search <searchName> sho or series or studio 
	Then click on buy button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	And Scroll and click on the buy button 
	And verify that system is redirecting login page 
	
	Examples: 
		| searchName |
		| trolls |
		
@paywall	
Scenario Outline: This test is to Verify that user cant able to play episodes as non logged user 
	
	When search <searchName> sho or series or studio 
	Then scroll down and click on first episode 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	And Scroll down and click on episode hyper link 
	And play the first episode 
	And verify that system is redirecting login page 
	 
	Examples: 
		| searchName |
		| trolls |

#create gud feature		
Scenario: verify that user cant able to create gud as non logged user in home page 
	
	When Scroll to bottom and play any promo 
	Then click on create gud button 
	And verify mini popup elements of create gud 
	And click on later button 
	Then click on create gud button 
	And click on signin button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	And play promo in fullscreen 
	Then click on create gud button 
	And verify mini popup elements of create gud 
	And click on later button 
	Then click on create gud button 
	And click on signin button 
	And verify that system is redirecting login page 
	Then close the browser 
	
@paywall
Scenario Outline: This test is to verify that user cant able to create gud as 
				  non logged user from studio detail page 
	When search <searchName> sho or series or studio 
	When Scroll to bottom and play any promo 
	Then click on create gud button 
	And verify mini popup elements of create gud 
	And click on later button 
	Then click on create gud button 
	And click on signin button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	And play promo in fullscreen 
	Then click on create gud button 
	And verify mini popup elements of create gud 
	And click on later button 
	Then click on create gud button 
	And click on signin button 
	And verify that system is redirecting login page 
	 
	
	Examples: 
		| searchName |
		| santii |
		
@paywall	
Scenario Outline: This test is to verify that user cant able to create gud as non logged user in sho detail page 
	When search <searchName> sho or series or studio 
	When Scroll to bottom and play any promo 
	Then click on create gud button 
	And verify mini popup elements of create gud 
	And click on later button 
	Then click on create gud button 
	And click on signin button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	And play promo in fullscreen 
	Then click on create gud button 
	And verify mini popup elements of create gud 
	And click on later button 
	Then click on create gud button 
	And click on signin button 
	And verify that system is redirecting login page 
	
	
	Examples: 
		| searchName |
		| Interstellar - English |
		

#follow feature		
Scenario: verify that user cant able follo studio from home 
	When Scroll to bottom and follow any studio 
	Then verify mini popup elements of follow 
	And click on later button 
	Then follow any studio 
	And click on signin button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	Then close the browser 
	

Scenario: verify that user cant able follo studio from explore studio page 
	When click on shocial and click on explore studio card 
	Then follow any studio 
	Then verify mini popup elements of follow 
	And click on later button 
	Then follow any studio 
	And click on signin button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	Then close the browser 
	
@paywall
Scenario Outline: This tes is to verify that user cant able to follow studio as non logged user 
	When search <searchName> sho or series or studio 
	Then click on follow button from studio detail page 
	Then verify mini popup elements of follow 
	And click on later button 
	Then click on follow button from studio detail page 
	And click on signin button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	
	
	Examples: 
		| searchName |
		| santii |
		

#Audio Feature		
Scenario: Verify audio favorite feature in flick page 
	When scroll to bottom and play any audio 
	Then verify the audio player 
	And click on the fav button from player 
	Then verify mini popup elements of favorite 
	And click on later button 
	And click on the fav button from player 
	And click on signin button 
	And verify that system is redirecting login page 
	Then close the browser 
	
@paywall
Scenario Outline: This test is to verify that user cant fav audio as non logged user from studio detail page 
	When search <searchName> sho or series or studio 
	Then scroll to bottom and play any audio 
	Then verify the audio player 
	And click on the fav button from player 
	Then verify mini popup elements of favorite 
	And click on later button 
	And click on the fav button from player 
	And click on signin button 
	And verify that system is redirecting login page 
	
	Examples: 
		| searchName |
		| santii |
		
@paywall
Scenario Outline: This test is to verify that user cant fav audio as non logged user from sho or series detail page 
	When search <searchName> sho or series or studio 
	Then scroll to bottom and click on play all button 
	Then verify the audio player 
	And click on the fav button from player 
	Then verify mini popup elements of favorite 
	And click on later button 
	And click on the fav button from player 
	And click on signin button 
	And verify that system is redirecting login page 
	
	Examples: 
		| searchName |
		| Interstellar - English |
		
#Minititle
@paywall	
Scenario Outline: This test is to verify add to watchlist button from promo player 
	When search <searchName> sho or series or studio 
	And play the promo 
	And forward to the end 
	And Click on add to watchlist button from minititle 
	And Verify the add to watchlist mini pop elements 
	And click on later button 
	Then click on add to watchlist button from sho detail page 
	And click on signin button 
	And verify that system is redirecting login page 
	
	
	Examples: 
		|searchName|
		|Interstellar - English|
@paywall	
Scenario Outline: This test is to verify add to watchlist button from promo player (fullscreen)
	When search <searchName> sho or series or studio 
	And play the promo 
	And play promo in fullscreen 
	And forward to the end 
	And Click on add to watchlist button from minititle 
	And Verify the add to watchlist mini pop elements 
	And click on later button 
	Then click on add to watchlist button from sho detail page 
	And click on signin button 
	And verify that system is redirecting login page 
	
	
	Examples: 
		|searchName|
		|Interstellar - English|
		
@paywall
Scenario Outline: This test is to verify buy button from promo player
	When search <searchName> sho or series or studio 
	And play the promo 
	And forward to the end 
	And Click on buy button from minititle 
	And verify that system is redirecting login page 
	
	
	Examples: 
		|searchName|
		|Interstellar - English|
@paywall	
Scenario Outline: This test is to verify buy button from promo player (fullscreen) 
	When search <searchName> sho or series or studio 
	And play the promo 
	And play promo in fullscreen 
	And forward to the end 
	And Click on buy button from minititle 
	And verify that system is redirecting login page 
	
	
	Examples: 
		|searchName|
		|Interstellar - English|
		
#watch Free feature	
@paywall	
Scenario Outline: This test is to verify the watch free button funtionality from sho detail page 
	When search <searchName> sho or series or studio 
	And click on the watch free button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	
	
	Examples: 
		| searchName |
		| carmen |
		
@paywall
Scenario Outline: This test is to verify the watch free button funtionality from promo player 
	When search <searchName> sho or series or studio 
	And play the promo 
	And forward to the end 
	And click on the watch free button 
	And verify that system is redirecting login page 
	And Navigate back from login page 
	
	Examples: 
		| searchName |
		| carmen |
		
@paywall
Scenario Outline: This test is to verify the watch free button funtionality from promo player (Fullscreen) 
	When search <searchName> sho or series or studio 
	And play the promo 
	And play promo in fullscreen 
	And forward to the end 
	And click on the watch free button 
	And verify that system is redirecting login page 
	Examples: 
		| searchName |
		| carmen |
		
#coming soon feature
@paywall	
Scenario Outline: This test is to verify the coming soon button funtionality from sho detail page 
	When search <searchName> sho or series or studio 
	And Verify the coming soon button 
	
	Examples: 
		| searchName |
		| Mundasupatti |
		
@paywall
Scenario Outline: This test is to verify the coming soon button funtionlity from promo player 
	When search <searchName> sho or series or studio 
	And play the promo 
	And forward to the end 
	And Verify the coming soon button 
	Examples: 
		| searchName |
		| Mundasupatti |
		
@paywall	
Scenario Outline: This test is to verify the coming soon button funtionality from mini title (fullscreen)
	When search <searchName> sho or series or studio 
	And play the promo 
	And play promo in fullscreen 
	And forward to the end 
	And Verify the coming soon button 
	Examples: 
		| searchName |
		| Mundasupatti |

		
#gud increment
@paywall	
Scenario Outline: This test is to verify the gud count should not increase if the user is not authorized. 
	When search <searchName> sho or series or studio 
	And play the promo 
	And create gud and verify the gud count 
	And close the player 
	Examples: 
		| searchName |
		| Interstellar - English |
		
@paywall
Scenario Outline: This test is to verify the gud count should not increase if the user is not authorized. (fullscreen)
	When search <searchName> sho or series or studio 
	And play the promo 
	And play promo in fullscreen  
	And create gud and verify the gud count 
	And close the player 
	Examples: 
		| searchName |
		| Interstellar - English |
		
