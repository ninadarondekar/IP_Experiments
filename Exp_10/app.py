from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        gender = request.form["gender"]
        course = request.form["course"]
        
        return f"""
        <h2>Registration Successful!</h2>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Phone:</b> {phone}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Course:</b> {course}</p>
        <a href="/">Back to Registration Form</a>
        """
        
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
