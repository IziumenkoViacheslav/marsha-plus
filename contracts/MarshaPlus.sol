// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // compiler version

contract MarshaPlus {
    // uint256 public totalSupply = 8000000000; // 8 billion tokens
    string public token_name = "MARSHA+"; // token name - human - readable
    string public token_symbol = "MRA";
    // uint256 public totalSupply = 80000000000000 * 10 ** 18; TODO uncoment before pord!!!
    uint256 public totalSupply = 100; // for developing and testing, delete before deploy in prod
    uint8 public decimals = 18; // will set the divisibility of your token

    address payable public owner; // Holds the owner of the token

    uint256 lastTimeBurned;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    address public constant community =
        0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    address public constant foundation =
        0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    address public constant marketing =
        0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
    address public constant advisor =
        0x90F79bf6EB2c4f870365E785982E1f101E93b906;
    address public constant developer =
        0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65;
    address public constant technical =
        0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc;

    constructor() {
        lastTimeBurned = block.timestamp;
        // community = msg.sender;
        balanceOf[community] = (totalSupply * 35) / 100;
        emit Transfer(msg.sender, community, balanceOf[community]);
        balanceOf[foundation] = (totalSupply * 25) / 100;
        balanceOf[marketing] = (totalSupply * 8) / 100;
        balanceOf[advisor] = totalSupply / 20;
        balanceOf[developer] = (totalSupply * 10) / 100;
        balanceOf[technical] = (totalSupply * 5) / 100;

        // emit Transfer(msg.sender, companion, totalSupply / 2);
        // emit Transfer(msg.sender, developer, totalSupply / 10);
    }

    function transferTo(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        uint256 senderBalance = balanceOf[msg.sender];
        uint256 receiverBalance = balanceOf[_to];

        require(_to != address(0), "Receiver address invalid");
        require(_to != msg.sender, "Receiver address invalid");
        require(_value >= 0, "Value must be greater or equal to 0");
        require(senderBalance > _value, "Not enough balance");

        balanceOf[msg.sender] = senderBalance - _value;
        balanceOf[_to] = receiverBalance + _value;

        emit Transfer(msg.sender, _to, _value);
        burn();
        return true;
    }

    function burn() private returns (bool success) {
        uint256 burnThreePersentTotalSupply = (totalSupply * 3) / 100;
        if (
            // block.timestamp > (lastTimeBurned + (365 days)) &&
            block.timestamp > (lastTimeBurned + (10 seconds)) &&
            (balanceOf[community] > burnThreePersentTotalSupply)
        ) {
            balanceOf[community] =
                balanceOf[community] -
                burnThreePersentTotalSupply;
            totalSupply = totalSupply - burnThreePersentTotalSupply;
            emit Transfer(community, address(0), burnThreePersentTotalSupply);
            lastTimeBurned = block.timestamp;
        }

        return true;
    }
}

library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     */
    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}
