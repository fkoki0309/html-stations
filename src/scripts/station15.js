async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];

  let promise = new Promise(function (resolve) {
    setTimeout(() => resolve(userList), 3000)
  });

  await promise;

  return userList.map(test);
}

function test(data) {

  const full_name = data.family_name + ' ' + data.first_name;
  data = { ...data, full_name: full_name };
  return data;

}

