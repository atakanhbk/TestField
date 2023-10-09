function FirstPerson({ info }) {
  const firstPersonInfo = {
    name: "Atakan",
    surname: "Höbek",
  };

  const addPersonToList = () => {
    info(firstPersonInfo);
  };
  return (
    <div>
      <h1>
        {firstPersonInfo.name} {firstPersonInfo.surname}
      </h1>
      <button onClick={addPersonToList}>Add This Person To List</button>
    </div>
  );
}

export default FirstPerson;
