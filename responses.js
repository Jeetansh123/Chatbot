function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") { 
        return "rock";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "Goodbye") {
        return "Talk to you later!";
    } else if (input == "How are you ?") {
        return "I'm fine, What about you ?";
    } else if (input == "I'm good") {
        return "That's good to hear!";
    }else if (input == "I'm a bit sad") {
        return "Don't worry, nothing is permanent";
    }else if (input == "I'm fine") {
        return "nice!";
    }else if (input == "Who created you ?") {
        return "Jeetansh Dhiman";
    }else if (input == "Hi") {
            return "Hi mate!";
        }else if (input == "Do you like music") {
            return "YEs, Ofcourse!       ";
    }else if (input == "What is your favourite sport ?") {
        return "Unfortunately I can't play but I like football a bit.!";
    }else {
        return "Try asking something else!";
    }
    
    
}

alert('Welcome, Have a great time!');

 