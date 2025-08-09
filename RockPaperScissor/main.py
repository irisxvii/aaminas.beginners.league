import random

def prompt_player():
    valid_moves = ['rock', 'paper', 'scissors']
    while True:
        move = input("edku rock 🪨, paper 📄 or scissors ✂️: ").strip().lower()
        if move in valid_moves:
            return move
        print("rock paper scissor matrem patolu")

def computer_move():
    return random.choice(['rock', 'paper', 'scissors'])

def winner(player, computer):
    if player == computer:
        return "tie aaan"
    wins = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    }
    if wins[player] == computer:
        return "yayyy"
    return "ayyoo"

def main():
    emoji_map = {'rock': '🪨', 'paper': '📄', 'scissors': '✂️'}

    print("hi namaskaram shawtie")
    while True:
        player_choice = prompt_player()
        comp_choice = computer_move()

        print(f"you: {player_choice} {emoji_map[player_choice]}")
        print(f"ur sister: {comp_choice} {emoji_map[comp_choice]}")

        print(winner(player_choice, comp_choice))

        again = input("onude kaliknno (y/n): ").strip().lower()
        if again != 'y':
            print("appo sheri gunite")
            break

if __name__ == "__main__":
    main()