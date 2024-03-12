function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'components/member/member.html',
    controller: function($scope) {
      $scope.skills = $scope.member.skills;
    }
  };
}
