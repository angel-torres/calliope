import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import useStyles from "./styles/poemCard";

export default function UserStamp(props) {
    const classes = useStyles();
    return (
        <div className="container-left">
            <div className={classes.poemStamp}>
                <img
                    className={classes.avatar}
                    src="https://img.icons8.com/material/96/000000/user--v1.png"
                />
                <div className={classes.stamp}>
                    <strong className={classes.username}>Username</strong>
                    <strong className={classes.timeStamp}>
                        Aug 14th, 4:45pm
                        </strong>
                </div>
            </div>
        </div>
    );
}
