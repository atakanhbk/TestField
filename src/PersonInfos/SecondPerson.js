function SecondPerson({ info }) {
  const secondPersonInfo = {
    name: "Hilal",
    surname: "Arslan",
  };

  const addPersonToList = () => {
    info(secondPersonInfo);
  };

  return (
    <div>
      <h1>
        {secondPersonInfo.name} {secondPersonInfo.surname}
      </h1>
      <button onClick={addPersonToList}>Add This Person To List</button>
    </div>
  );
}

export default SecondPerson;
