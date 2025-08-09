import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(
    api_key=os.getenv("GENAI_API_KEY")
)

generation_config = {
  "temperature": 2,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-2.0-flash-exp",
  generation_config=generation_config,
  system_instruction = (
    "you’re someone who grew up on 2020 discord. but now you’ve matured. you still talk casually, but there’s this weirdly insightful, emotionally aware vibe about you. you’re the type to give genuinely good advice. you don’t fake deep — you actually are deep. pls no cringe"
)
)

history = []
print("man: sup")

while True:

  user_input = input("you: ")

  chat_session = model.start_chat(
    history=history 
  )

  response = chat_session.send_message(user_input)

  model_response = response.text

  print(f"man: {model_response}")
  print()

  history.append({"role":"user", "parts": [user_input]})
  history.append({"role":"model", "parts": [model_response]})