from turtle import Screen
from snake import Snake
from food import Food
from scoreboard import ScoreBoard
import time

screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("My Snake Game")
screen.tracer(0)

snake = Snake()
food = Food()
scoreboard = ScoreBoard()

# #Keys to move
screen.listen()
screen.onkey(snake.up, "Up")
screen.onkey(snake.down, "Down")
screen.onkey(snake.left, "Left")
screen.onkey(snake.right, "Right")

game_is_on = True
while game_is_on:
    screen.update()
    time.sleep(0.1)

    snake.move()

#detech collsion with food
    if snake.head.distance(food) < 13:
        food.refresh_food()
        snake.extend()
        scoreboard.increasing_score()

#detech collision with wall
    if snake.head.xcor() > 280 or snake.head.xcor() < -280 or snake.head.ycor() > 280 or snake.head.ycor() < -280:
        game_is_on = False
        scoreboard.game_over()

#detech collision with tail
#Skips the first head so it don't show game over using the slicing method
    for segent in snake.segments[1:]:
        if snake.head.distance(segent) < 10:
            game_is_on = False
            scoreboard.game_over()

screen.exitonclick()