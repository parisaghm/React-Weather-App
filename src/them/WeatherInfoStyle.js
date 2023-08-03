import styled from 'styled-components';


const WeatherInfoStyle = styled.div`
  {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(papayawhip, white);
    font-family: 'Montserrat', sans-serif;
    font-family: 'Open Sans', sans-serif;
  }


  .form-container{
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    box-shadow: 0 3px 6px 0 #555;
    padding: 20px 10px;
    border-radius: 10px;
    width: 380px;
    background-color: white;
  }

  .condition-style{
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }

  .condition-info{
    display: flex;
    align-items: center;
  }

  .weatherLogo{
    margin: 40px auto;
  }

  .chooseCityLabel{
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
  }

  .searchBox{
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    border-radius: 10px;
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 20px auto;
    box-shadow: 0px 1px 3px 0px #555;
  }

  .searchBox input{
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-weight: bold;
  }

  .searchBox button {
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    border-radius: 10px;
    outline: none;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 1px 3px 0px #555;
    transition: 1s;
  }

  .searchBox button:hover{
    background-color: #ffc84b;
    color: black;
  }
  
`;

export { WeatherInfoStyle };