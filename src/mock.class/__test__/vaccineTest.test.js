import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockedAcceptInjection = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockedAcceptInjection,
    };
  });
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockedAcceptInjection.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    expect(mockedAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
  });
});
