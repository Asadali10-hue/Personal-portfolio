import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PaginationComponent = ({currentPage, perPage, total}) => {
  return (
    <div className="mt-10 mx-auto text-main">
        <ul className="flex justify-between gap-2 lg:gap-4 items-center text-sm mt-8  w-fit mx-auto">
          <li>
            {currentPage > 1 ? (
              <Link
                href={{
                  pathname: "/our-work",
                  query: {
                    page: currentPage - 1,
                  },
                }}
              >
                <span className="flex items-center gap-1">
                  <ChevronLeft className="w-5 h-5" /> Previous
                </span>
              </Link>
            ) : (
              <span className="text-zinc-400 flex items-center gap-1">
                <ChevronLeft className="w-5 h-5" /> Previous
              </span>
            )}
          </li>

          {typeof total === "number" && (
            <li className="flex-grow flex justify-center">
              <ul className="flex items-center gap-3">
                {currentPage > 2 && (
                  <>
                    <li>
                      <Button
                        variant="outline"
                        asChild
                        size="sm"
                        className="h-auto px-2.5 py-1"
                      >
                        <Link
                          href={{ pathname: "/our-work", query: { page: 1 } }}
                        >
                          1
                        </Link>
                      </Button>
                    </li>
                    {currentPage > 3 && <li className="">...</li>}
                  </>
                )}

                {currentPage > 1 && (
                  <li>
                    <Button
                      variant="outline"
                      asChild
                      size="sm"
                      className="h-auto px-2.5 py-1"
                    >
                      <Link
                        href={{
                          pathname: "/our-work",
                          query: {
                            page: currentPage - 1,
                          },
                        }}
                      >
                        {currentPage - 1}
                      </Link>
                    </Button>
                  </li>
                )}

                <li>
                  <Button
                    variant="default"
                    asChild
                    size="sm"
                    className="h-auto px-2.5 py-1"
                  >
                    <Link
                      href={{
                        pathname: "/our-work",
                        query: {
                          page: currentPage,
                        },
                      }}
                    >
                      {currentPage}
                    </Link>
                  </Button>
                </li>

                {currentPage < Math.ceil(total / perPage) && (
                  <li>
                    <Button
                      variant="outline"
                      asChild
                      size="sm"
                      className="h-auto px-2.5 py-1"
                    >
                      <Link
                        href={{
                          pathname: "/our-work",
                          query: {
                            page: currentPage + 1,
                          },
                        }}
                      >
                        {currentPage + 1}
                      </Link>
                    </Button>
                  </li>
                )}

                {currentPage < Math.ceil(total / perPage) - 1 && (
                  <>
                    {currentPage < Math.ceil(total / perPage) - 2 && (
                      <li>...</li>
                    )}
                    <li>
                      <Button
                        variant="outline"
                        asChild
                        size="sm"
                        className="h-auto px-2.5 py-1"
                      >
                        <Link
                          href={{
                            pathname: "/our-work",
                            query: {
                              page: Math.ceil(total / perPage),
                            },
                          }}
                        >
                          {Math.ceil(total / perPage)}
                        </Link>
                      </Button>
                    </li>
                  </>
                )}
              </ul>
            </li>
          )}

          <li>
            {currentPage < Math.ceil(total / perPage) ? (
              <Link
                href={{
                  pathname: "/our-work",
                  query: {
                    page: currentPage + 1,
                  },
                }}
              >
                <span className="flex items-center gap-1">
                  Next <ChevronRight className="w-5 h-5" />
                </span>
              </Link>
            ) : (
              <span className="text-zinc-400 flex items-center gap-1">
                Next <ChevronRight className="w-5 h-5" />
              </span>
            )}
          </li>
        </ul>
      </div>
  )
}

export default PaginationComponent