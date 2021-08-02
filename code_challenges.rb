# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# create a method - word_sort
# parameter - array, letter
# iteration - each
# includes letter

def word_sort array, letter
  array.select do |value|
    value.include?(letter)
  end
end
p word_sort beverages_array, letter_o
p word_sort beverages_array, letter_t

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# create a method - vowel_removed
# parameter - string
# called delete with bang passed it lower and uppercase vowels

def vowel_removed string
  string.delete('aeiouAEIOU')
end
p vowel_removed album1
p vowel_removed album2
p vowel_removed album3
p album1

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
class Bike
  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def get_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
  def pedal_faster speed
    @current_speed += speed
  end
  def brake brake_strength
    if @current_speed - brake_strength < 0
      @current_speed = 0
    else
      @current_speed -= brake_strength
    end
  end
end
trek = Bike.new 'trek'
p trek.get_info
trek.pedal_faster 5
trek.pedal_faster 15
p trek.get_info
trek.brake 3
p trek.get_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
