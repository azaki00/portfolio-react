import React, { useState } from "react";
import "./home.css";
import ArticleCard from "./ArticleCard";

const Home = () => {
  const [post, setPost] = useState("");
  return (
    <>
      <div className="homepage">
        <div className="name"> Ahmad Issa</div>
        <div className="articles">
          <article className="art">
            <img
              className="artimg"
              src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            ></img>
            <p>
              Hi, I'm Ahmad, and this is my work. This is one of several
              projects i worked on. I decided to do one where i try to combine
              most of what i know so far in front end development here in one
              simple project. I hope you enjoy!
            </p>
          </article>
          <article className="art">
            <img
              className="artimg"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7fd6b8c-0542-4fd7-a062-164018eefe57/da5tdrw-0bd11c63-6d8d-4e70-9499-9f63bb62cb0f.jpg/v1/fill/w_1600,h_900,q_75,strp/4k_minimalist_wallpaper_3d_by_clover_da5tdrw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYTdmZDZiOGMtMDU0Mi00ZmQ3LWEwNjItMTY0MDE4ZWVmZTU3XC9kYTV0ZHJ3LTBiZDExYzYzLTZkOGQtNGU3MC05NDk5LTlmNjNiYjYyY2IwZi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JFe15ZNc12S00eaaSNYtUhmUYsttYgz3FQw9VqRQOgg"
            ></img>
            <p>
              I'm trying to implement alot of functionalities i learned for the
              past 4 months here into work.
            </p>
          </article>
          <article className="art">
            <img
              className="artimg"
              src="https://wallpaperaccess.com/full/99791.jpg"
            ></img>
            <p>
              So without further ado, let's get to the magic... {<br />} Laboris
              consectetur mollit anim in sunt non quis. In consequat duis velit
              irure. Nisi non exercitation anim sunt laborum tempor nisi commodo
              sint exercitation qui magna exercitation.
            </p>
          </article>
        </div>
        <div className="articles2">
          <div className="art2">
            <div>
              <p>
                Nisi consectetur officia in excepteur aute ut. Magna qui minim
                occaecat amet duis minim sit ipsum occaecat qui mollit. Sunt
                laboris esse aliqua amet adipisicing cupidatat occaecat
                excepteur pariatur commodo. Lorem consectetur dolore ullamco
                commodo cupidatat.Irure voluptate est ea est ut est incididunt
                dolor sit fugiat occaecat. Sit pariatur amet incididunt enim.
                Qui veniam eu esse qui nisi esse aliquip occaecat irure sint.
                Proident irure pariatur ipsum laboris eu sunt ut nostrud magna
                proident.Voluptate proident in dolor non occaecat. Consequat
                laborum deserunt et mollit Lorem aliquip amet proident culpa
                labore. Eiusmod exercitation elit ullamco eiusmod esse qui aute
                exercitation eu. Et dolor cupidatat duis enim eiusmod sunt.
                Eiusmod proident amet et ad pariatur magna officia tempor.Ex ex
                Lorem veniam eu reprehenderit sint cillum eiusmod et ipsum
                ullamco ipsum. Nulla non occaecat irure amet adipisicing qui
                qui. Cillum ex irure ipsum dolor nostrud...
              </p>
            </div>
            <div>
              <img
                className="artimg view"
                src="https://i.pinimg.com/originals/a0/a0/16/a0a01608a0386ad052a15a5af8196be7.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
