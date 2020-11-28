import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function BooksHooks() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  const [Books, setBooks] = useState([]);
  const [Load, setLoad] = useState(false);

  const fectchData = () => {
    axios
      .get("http://localhost:8000/wp-json/wp/v2/books")
      .then((res) => {
        setBooks(res.data);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fectchData();
  }, []);

  return (
    <div>
      {" "}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Enciclopédia do Desporto em Português
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      {console.log(Books)}
      {Books.map((book) => {
        return (
          <div>
            <h1>{book.title.rendered}</h1>
            <p>{book.id}</p>
          </div>
        );
      })}
       {!Load ? <h3>Loading Data ...</h3>: "" }
    </div>
  );
}

export default BooksHooks;
