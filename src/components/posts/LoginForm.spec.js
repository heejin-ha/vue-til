import { sum } from './math';

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
        // expect(result).not.toBe(35);
    });
});

