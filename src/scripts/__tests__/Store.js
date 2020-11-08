import Store from "../Store";
import mockData from "../../../public/db.json";

describe("filter", () => {
  let sut;

  beforeEach(() => {
    // Arrange
    sut = new Store();
    sut.setDeals(mockData.deals);
  });

  it("should return all deals when no filters applied", () => {
    // Act
    const result = sut.deals;

    // Assert
    expect(result).toEqual(mockData.deals);
    expect(result.length).toEqual(11);
  });

  it('should return 4 broadband deals when filtered by broadband', () => {
    // Act
    sut.setProductFilter('broadband');

    // Assert
    expect(sut.deals.length).toEqual(4);
  });
});
