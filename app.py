from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/editsite/ajkjfkjioajd09121nknad8cuj89ajdkmk11mj0uc9sikmi23m', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['cin']
        return f'Hello, {name}!'
    return render_template('cms.html')