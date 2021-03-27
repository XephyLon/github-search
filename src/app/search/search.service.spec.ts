import { Overlay } from "@angular/cdk/overlay";
import { MatSnackBar } from "@angular/material/snack-bar";
import { createHttpFactory, HttpMethod, SpectatorHttp } from "@ngneat/spectator/jest";
import { CombinedResponseData } from "./models/search-response.model";
import { defaultResponse, expectedResponse } from "./search.data";
import { SearchService } from "./search.service";

describe('SearchService', () => {
    let spectator: SpectatorHttp<SearchService>
    const createHttp = createHttpFactory({
        service: SearchService,
        providers: [MatSnackBar, Overlay]
    })

    beforeEach(() => spectator = createHttp());

    describe('SearchService.data$', () => {
        it("Shouldn't make a GET request on initial subscription", () => {
            spectator.service.data$.subscribe({
                next: res => expect(res).toBeFalsy()
            })
        })

        it('Should emit empty results if nothing was found.', () => {
            spectator.service.searchQuery$.next('afhgahjdsfgdfgsgfDGDFHDFHS')
            spectator.service.data$.subscribe({
                next: res => expect(res).toEqual(defaultResponse as CombinedResponseData)
            })
        })

        it('Should have full user data in each item', () => {
            spectator.service.searchQuery$.next('XephyLon');
            spectator.service.data$.subscribe({
                next: res => expect(res).toEqual(expectedResponse)
            })
        })
    })
})