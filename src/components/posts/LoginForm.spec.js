/**
 * 1. id 인풋박스에 이메일 입력 -> 이메일 맞는지 확인하는 로직
 * 2. ID, PW 맞는 경우 로그인 처리가 된다.
 * 3. 다음 페이지로 이동
 */

import { sum } from './math';

sum(10, 20);

/**
 * describe API : JEST에서 사용하는 API
 * describe() : 연관된 테스트 케이스를 그룹화하는 API
 * test() : 하나의 테스트 케이스를 검증하는 API
 * expect() : 하나의 테스트 케이스 결과 검증
 */

describe('math.js', () => {
    test('10 + 20 = 30', () => {
        const result = sum(10, 20);
        expect(result).toBe(30);
    });
});

