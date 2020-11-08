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
    expect(sut.deals[0].id).toEqual(6158);
    expect(sut.deals[1].id).toEqual(4359);
    expect(sut.deals[2].id).toEqual(4371);
    expect(sut.deals[3].id).toEqual(5459);
  });

  it('should return 4 deals when filtered by broadband and tv', () => {
    // Act
    sut.setProductFilter('broadband');
    sut.setProductFilter('tv');

    // Assert
    expect(sut.deals.length).toEqual(4);
    expect(sut.deals[0].id).toEqual(6074);
    expect(sut.deals[1].id).toEqual(5738);
    expect(sut.deals[2].id).toEqual(6165);
    expect(sut.deals[3].id).toEqual(6468);
  });

  it('should return 1 deal when filtered by broadband and mobile', () => {
    // Act
    sut.setProductFilter('broadband');
    sut.setProductFilter('mobile');

    // Assert
    expect(sut.deals.length).toEqual(1);
    expect(sut.deals[0].id).toEqual(4276);
  });

  it('should return 1 deal when filtered by sky provider', () => {
    // Act
    sut.setProviderFilter('sky');

    // Assert
    expect(sut.deals.length).toEqual(1);
  });
});
