import { useRef, useState } from "react";
// import profile from "./person.jpeg";
console.log("admin");

const Admin = () => {
  // START
  const [showCategory, setShowCategory] = useState("true");

  const [person, setPerson] = useState("");

  const [peopel, setPeopel] = useState([]);

  const formInput = useRef(null);
  const formRadio = useRef(null);

  const [favorit, setFavorit] = useState([]);

  const formdata = (e) => {
    e.preventDefault();

    // FAVORITES

    console.log(formRadio.current);

    const array = Array.from(formRadio.current);
    console.log(array);

    array.map((lang) => {
      if (lang.checked) {
        console.log(lang.value);
        setFavorit([lang.value]);
      }
    });

    console.log(favorit);

    // PERSON

    const name = formInput.current.firstName.value;
    const lastName = formInput.current.lastName.value;
    const email = formInput.current.email.value;
    console.log(person);

    if (name && lastName && email) {
      setPerson({ name, lastName, email });
      const newPerson = { ...person, id: new Date().getTime().toString() };
      // console.log(newPerson);
      setPeopel([...peopel, newPerson]);
      formInput.current.firstName.value = "";
      formInput.current.lastName.value = "";
      formInput.current.email.value = "";
    }
  };

  return (
    <>
      {showCategory && (
        <div className="container__form">
          <div className="detail-form">
            <div className="detail-person">
              <form className="detail-person" ref={formInput}>
                <label htmlFor="">
                  نام :
                  <input type="text" placeholder="نام" name="firstName" />
                </label>

                <label htmlFor="">
                  فامیل :
                  <input type="text" placeholder="فامیل" name="lastName" />
                </label>
                <label htmlFor="">
                  ایمیل :
                  <input type="email" placeholder="ایمیل" name="email" />
                </label>
              </form>
              <form>
                <label>
                  <input type="date" />
                  تاریخ تولدتان را وارد کنید
                </label>
              </form>
            </div>
            <p>زبان مورد علاقتون انتخاب کنید. </p>
            <form className="favorites" ref={formRadio}>
              <label htmlFor="Javascript">
                <input
                  type="checkbox"
                  value={"javascript"}
                  name="javascript"
                  className="language"
                  id="A"
                />
                JavaScript
              </label>

              <label htmlFor="Java">
                <input
                  type="checkbox"
                  value={"java"}
                  name="java"
                  className="language"
                  id="B"
                />
                Java
              </label>

              <label htmlFor="Python">
                <input
                  type="checkbox"
                  value={"python"}
                  name="python"
                  className="language"
                  id="C"
                />
                Python
              </label>

              <label htmlFor="Golang">
                <input
                  type="checkbox"
                  value={"golang"}
                  name="golang"
                  className="language"
                  id="C"
                />
                Golang
              </label>
            </form>
            <div className="item">
              <label htmlFor=""> آیابه تدریس علاقه دارید؟ </label>
              <label htmlFor=""> خیر</label>
              <input type="radio" />
              <label htmlFor="">بله </label>
              <input type="radio" />
            </div>
            <form className="upload" method="post">
              <label>
                آپلود مدارک : <input type="file" />
              </label>
            </form>

            <form>
              <textarea rows={"10"} cols={"30"}>
                توضیحات:
              </textarea>
            </form>

            <div className="buttons">
              <button onClick={formdata}>تایید</button>
              <button onClick={() => setShowCategory()}>انصراف</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
