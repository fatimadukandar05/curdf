from flask import Flask, render_template, request, redirect, url_for, flash
# import js2py
from flask_mysqldb import MySQL


app = Flask(__name__)
app.secret_key = 'many random bytes'

# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = ''
# app.config['MYSQL_DB'] = 'crud'


app.config['MYSQL_HOST'] = 'sql6.freemysqlhosting.net'
app.config['MYSQL_USER'] = 'sql6451949'
app.config['MYSQL_PASSWORD'] = 'j8CJtnfV5Y'
app.config['MYSQL_DB'] = 'sql6451949'


# sql6.freemysqlhosting.net
# Server: sql6.freemysqlhosting.net
# Name: sql6451529
# Username: sql6451529
# Password: HAfThhu33T
# Port number: 3306
# $servername = "sql300.epizy.com";
# $username = "epiz_29615115";
# $password = "Fy9XDMe7BO";
# $dbname = "epiz_29615115_peopledb";


mysql = MySQL(app)


# js2py.translate_file("js/validation.js", "_init_.py")


@app.route('/')
def Index():
    cur = mysql.connection.cursor()
    cur.execute("SELECT  * FROM students")
    data = cur.fetchall()
    cur.close()




    return render_template('index2.html', students=data )



@app.route('/insert', methods = ['POST'])
def insert():

    if request.method == "POST":
        flash("Data Inserted Successfully")
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO students (name, email, phone) VALUES (%s, %s, %s)", (name, email, phone))
        mysql.connection.commit()
        return redirect(url_for('Index'))




@app.route('/delete/<string:id_data>', methods = ['GET'])
def delete(id_data):
    flash("Record Has Been Deleted Successfully")
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM students WHERE id=%s", (id_data,))
    mysql.connection.commit()
    return redirect(url_for('Index'))





@app.route('/update',methods=['POST','GET'])
def update():

    if request.method == 'POST':
        id_data = request.form['id']
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        cur = mysql.connection.cursor()
        cur.execute("""
               UPDATE students
               SET name=%s, email=%s, phone=%s
               WHERE id=%s
            """, (name, email, phone, id_data))
        flash("Data Updated Successfully")
        mysql.connection.commit()
        return redirect(url_for('Index'))









if __name__ == "__main__":
    app.run(debug=True)



# js2py.eval_js("validation.js")