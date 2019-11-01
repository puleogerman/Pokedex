require 'test_helper'

class BattleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get battle_index_url
    assert_response :success
  end

end
