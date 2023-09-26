export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

    this.addNeighborhood = (newNeighborhood) => {
        // Arrow function
        this.sanFranciscoNeighborhoods.push(newNeighborhood);
        return this.sanFranciscoNeighborhoods;
    };
}
