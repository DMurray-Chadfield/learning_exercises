import React from "react";

export class Display extends React.Component {
    render() {
        let data = this.props.data;
        let first;
        let last;
        let gender;
        let nationality;
        if (data) {
            first = data.First;
            last = data.Last;
            gender = data.Sex;
            nationality = data.Nationality;
        } else {
            first = "loading...";
            last = "loading...";
            gender = "loading...";
            nationality = "loading...";
        }
        return (
            <table>
                <tr>
                    <th>First Name</th>
                    <td>{first}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>{last}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{gender}</td>
                </tr>
                <tr>
                    <th>Nationality</th>
                    <td>{nationality}</td>
                </tr>
            </table>
        );
    }
}